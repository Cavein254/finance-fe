import { MdMoveUp } from "react-icons/md";
import { HiSave } from "react-icons/hi";
import { GiExpense } from "react-icons/gi";

export const actionsData = [
    {
        id: 1,
        icon: <MdMoveUp size={32} />,
        title: 'Transfer',
        onPress: () => console.log('Transfer')
    },
    {
        id: 2,
        icon: <HiSave size={32} />,
        title: 'Top Up',
        onPress: () => console.log('Transfer')
    },
    {
        id: 3,
        icon: <GiExpense size={32} />,
        title: 'Withdraw',
        onPress: () => console.log('Transfer')
    }
]