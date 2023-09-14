
const Mark = ({ title }) => {
    let count = 0;
    return (
        <div>
            <div className="p-5 bg-white rounded-lg">
                <div className="border-b-2">
                    <h3 className="text-[#2F80ED] font-semibold text-[18px] py-4">Credit Hour Remaining 7 hr</h3>
                </div>
                <h3 className="text-[#1C1B1B] font-bold text-[20px] py-4">Course Name</h3>
                {
                    title.map(element => (
                        count += 1,
                        <p key={count}>{count} {element.course}</p>
                    ))
                }
                <div className="border-y-2 mt-4">
                    <h3 className="font-semibold text-[18px] py-4">Total Credit Hour : 13</h3>
                </div>
                <div className="border-b-2">
                    <h3 className="font-semibold text-[18px] py-3">Total Price : 48000 USD</h3>
                </div>
            </div>
        </div>
    );
};

export default Mark;