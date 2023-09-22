import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const marks = 
    [
        {"id":1,"name":"Student 1","math_marks":65, "physics_marks": 60,},
        {"id":2,"name":"Student 2","math_marks":92, "physics_marks": 80,},
        {"id":3,"name":"Student 3","math_marks":78, "physics_marks": 96,},
        {"id":4,"name":"Student 4","math_marks":88, "physics_marks": 59,},
        {"id":5,"name":"Student 5","math_marks":55, "physics_marks": 76,},
        {"id":6,"name":"Student 6","math_marks":70, "physics_marks": 83,},
        {"id":7,"name":"Student 7","math_marks":89, "physics_marks": 53,},
        {"id":8,"name":"Student 8","math_marks":72, "physics_marks": 88,},
        {"id":9,"name":"Student 9","math_marks":91, "physics_marks": 54,},
        {"id":10,"name":"Student 10","math_marks":75, "physics_marks": 70,}
    ]

    return (
        <div>
            <LChart width={800} height={400} data={marks}>
                <Line type={'monotone'} dataKey={'math_marks'} stroke='red'></Line>
                <Line type='monotone' dataKey='physics_marks' stroke='green'></Line>
                <XAxis dataKey={'id'}></XAxis>
                <YAxis></YAxis>
            </LChart>
        </div>
    );
};

export default LineChart;