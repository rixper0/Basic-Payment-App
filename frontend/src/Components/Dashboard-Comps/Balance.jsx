export const Balance = ({ value }) => {
    return <div className="flex justify-center pt-3">
        <div className="font-bold text-lg text-center">
            Balance:
        </div>
        <div className="font-semibold ml-2 text-lg text-red-500">
            Rs {value}
        </div>
    </div>
}