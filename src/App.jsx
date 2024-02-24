
import './App.css';



function App() {
    const text = 'текст'
    const textt = <p>текст</p>
    const text1 = <p>текст1</p>
    const text2 = <p>текст2</p>
    const arr = ['a', 'b', 'c', 'd', 'e']
    const res = arr.map(function (item) {
        return <li>{item}</li>
    })
    const attr = 'block'
    const str = 'block'
    let showtext
    const show = true
    if (show) {
        showtext = <div>текст1</div>
    }
    else {
        showtext = <div>текст2</div>
    }

    function getText() {
        return <p>текст</p>

    }

    function getNum1() {
        let num1 = 1
        return num1
    }
    function getNum2() {
        let num2 = 2
        return num2
    }

    const rabotyagi = [
        { id: 1, name: 'Petka', surname: 'Vasiliev', rabdays: 10, daystake: 100, salary: 10 * 100 },
        { id: 2, name: 'Vaska', surname: 'Petrov', rabdays: 15, daystake: 150, salary: 15 * 150 },
        { id: 3, name: 'Vanka', surname: 'Vasiliev', rabdays: 20, daystake: 200, salary: 20 * 200 },
        { id: 4, name: 'Vaska', surname: 'Ivanov', rabdays: 25, daystake: 250, salary: 25 * 250 },
        { id: 5, name: 'Petka', surname: 'Ivanov', rabdays: 30, daystake: 300, salary: 30 * 300},
    ]
    const rows = rabotyagi.map(function (item) {
        return <tr key={rabotyagi.id}>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.rabdays}</td>
            <td>{item.daystake}</td>
            <td>{item.salary}</td>
        </tr>
    })




    return (<>

        {/*   1 задание */}
        текст


        {/* 2 задание */}

        {text}

        {/* 3 задание */}

        {textt}
        {/* 4 задание */}

        {text1}
        <p>!!!</p>
        {text2}

        {/* 5 задание */}

        <div id={attr}>
            текст
        </div>

        {/* 6 задание */}

        <div className={str}>
            текст
        </div>

        {/* 7 задание */}

        <div className='task7'>
            текст
        </div>

        {/* 8 задание */}

        {showtext}

        {/* 9 задание */}


        <ul>
            {res}
        </ul>



        {/* 10 задание  */}

        {getText()}



        {/* 11 задание  */}

        текст{getNum1() + getNum2()}

        {/* 12 задание  */}

        <table>

            <thead>
                <tr>
                    <td>Имя</td>
                    <td>Фамилия</td>
                    <td>Количество рабочих дней</td>
                    <td>Ставка</td>
                    <td>Зарплата</td>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>






    </>




    );
}

export default App;
