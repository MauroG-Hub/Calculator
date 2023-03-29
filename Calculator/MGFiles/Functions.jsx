
let CurrentOperand = 0;
let NextOperationToDo = '';
let Result = 0;
let ResultHasValue = false;
let OperandIntroduced = false;
let HasAPoint = false;
let AmountCharAfterPoint = 0;
let StrCurrentOperand = '';

export const NumberPressed = (Number, StrNumber) => {
    if (NextOperationToDo === '') {
        Result = 0;
        ResultHasValue = false;
    }
    OperandIntroduced = true;
    StrCurrentOperand === '0' ? StrCurrentOperand = StrNumber : StrCurrentOperand += StrNumber;
    if(HasAPoint) AmountCharAfterPoint++;
    return CurrentOperand = +StrCurrentOperand;
    //return CurrentOperand = ((CurrentOperand*10) + Number);
  }

export const PointPressed = () => {
    if(!HasAPoint){
        StrCurrentOperand += '.';
        HasAPoint = true;
    }
    return StrCurrentOperand;
}

export const BackPressed = () => {
    StrCurrentOperand = StrCurrentOperand.slice(0, -1);
    if(StrCurrentOperand === '') StrCurrentOperand = '0';
    if(HasAPoint) AmountCharAfterPoint--;
    if(AmountCharAfterPoint < 0) HasAPoint = false;
    CurrentOperand = +StrCurrentOperand;
    
    //CurrentOperand = (Math.floor(CurrentOperand/10));
    if (CurrentOperand === 0) OperandIntroduced = false;
    return CurrentOperand;
  }

export const ClearPressed = () => {
    NextOperationToDo = '';
    StrCurrentOperand = '0';
    CurrentOperand = +StrCurrentOperand;
    Result = 0;
    ResultHasValue = false;
    OperandIntroduced = false;
    HasAPoint = false;
    return 0;
  }

export const AddPressed = () => {
    CalculateAndSetFlags();
    NextOperationToDo = "+"
    return Result + ' +';
  }

export const MinusPressed = () => {
    CalculateAndSetFlags();
    NextOperationToDo = "-"
    return Result + ' -';
  }

export const MulPressed = () => {
    CalculateAndSetFlags();
    NextOperationToDo = "X"
    return Result + ' X';
}
    
export const DivPressed = () => {
    CalculateAndSetFlags();
    NextOperationToDo = "/"
    return Result + ' /';
}

export const PercentPressed = () => {
    CalculateAndSetFlags();
    NextOperationToDo = ""
    Result /= 100;
    return Result + '%';
}


export const EqualPressed = () => {
    if(NextOperationToDo != ''){
        return OperandIntroduced ? DoLastOperation() : Result + ' ' + NextOperationToDo;
    }
    else{
        if(OperandIntroduced){
            Result = CurrentOperand;
            StrCurrentOperand = '0';
            CurrentOperand = +StrCurrentOperand;
        }
        return Result;
    } 
  }



const DoLastOperation = () => {
    if(NextOperationToDo === 'X'){
        Result *= CurrentOperand;
    }
    if(NextOperationToDo === '/'){
        Result /= CurrentOperand;
    }
    if(NextOperationToDo === '+'){
        Result += CurrentOperand;
    }
    if(NextOperationToDo === '-'){
        Result -= CurrentOperand;
    }
    NextOperationToDo = '';
    return Result
}

const CalculateAndSetFlags = () => {
    Result = (ResultHasValue && OperandIntroduced) ? DoLastOperation() : OperandIntroduced ? CurrentOperand : Result;
    StrCurrentOperand = '0';
    CurrentOperand = +StrCurrentOperand;
    ResultHasValue = true;
    OperandIntroduced = false;
    HasAPoint = false;
}