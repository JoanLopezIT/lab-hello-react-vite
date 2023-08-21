import icon1 from './../assets/icon1.png'
import icon2 from './../assets/icon2.png'
import icon3 from './../assets/icon3.png'
import icon4 from './../assets/icon4.png'

function Icons(){
    return(
        <div className="icones">
            <table>
            <tr>
        <th>            <img className='logos' src={icon1} alt="Icon 1" /></th>
        <th><img className='logos' src={icon2} alt="Icon 2" /></th>
        <th><img className='logos' src={icon3} alt="Icon 3" /></th>
        <th><img className='logos' src={icon3} alt="Icon 4" /></th>
    </tr>
    <tr>
        <td>Declarative</td>
        <td>Components</td>
        <td>Single Way</td>
        <td>JSX</td>
    </tr>
    <tr>
        <td>odigg'pgvjpjgvppsjmbpi ms</td>
        <td>ipjef0wjivj0jgvsm</td>
        <td>oqjeogivjsoidjgvowin</td>
        <td>adjoivjoivjnoaidj</td>
    </tr>
            </table>
        </div>
    )
}

export default Icons