export const Balance = ({ value }) => {
    return <div className="flex justify-center pt-4 mt-3">
        <div className="font-bold text-xl text-center">
            Balance:
        </div>
        <div className="font-semibold ml-2 text-xl text-red-500">
            Rs {value}
        </div>
    </div>
}