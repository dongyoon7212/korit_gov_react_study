import React from "react";

function React02() {
    console.log("React02 렌더링 됨");
    const student = {
        name: "이동윤",
        age: 27,
        hobby: ["여행가기", "노래듣기", "영화보기"],
    };
    return (
        <div>
            <div>이름: {student.name}</div>
            <div>
                나이: {student.age} ({student.age > 19 ? "성인" : "미성년자"})
            </div>
            <div>
                <p>취미</p>
                <ul>
                    {student.hobby.map((hobbyName, index) => (
                        <li key={index}>{hobbyName}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default React02;
