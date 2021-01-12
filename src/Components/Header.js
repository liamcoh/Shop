import React from 'react';
import headerStyles from './Header.module.css';
import logo from '../Assets/logo.svg';
import checkIcon from '../Assets/checkIcon.svg';
import xIcon from '../Assets/xIcon.svg';

function Header({ list, sum }) {

  const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);
  
    const sortedItems = React.useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);
  
    const requestSort = (key) => {
      let direction = 'ascending';
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === 'ascending'
      ) {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };
  
    return { items: sortedItems, requestSort, sortConfig };
  };

  const { items, requestSort, sortConfig } = useSortableData(list);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };


  return (
    <div className={headerStyles.flexBox}>

      {/*Title*/}
      <img className={headerStyles.logoImg} src={logo} alt='logo'></img>
      <p className={headerStyles.title}>רשימת הקניות שלי ({list.length})</p>
      <div className={headerStyles.lineBreak}></div>

      {/*Table*/}
      <div className={headerStyles.tableDiv}>
        <table>
          <colgroup>
          <col style={{ width:'20%' }}></col>
          <col style={{ width:'20%' }}></col>
          <col style={{ width:'20%' }}></col>
          <col style={{ width:'20%' }}></col>
          <col style={{ width:'20%' }}></col>
          </colgroup>
          <thead>
            <tr>
              <th>
                <button
                  type="button"
                  onClick={() => requestSort('category')}
                  className={getClassNamesFor('category')}
                >
                  קטגוריה
                </button>
              </th>
              <th>
                שם מוצר
              </th>
              <th>
                 כמות
              </th>
              <th>
                <button
                  type="button"
                  onClick={() => requestSort('price')}
                  className={getClassNamesFor('price')}
                >
                  מחיר ליחידה
                </button>
              </th>
              <th>
                <button
                  type="button"
                  onClick={() => requestSort('totalPrice')}
                  className={getClassNamesFor('totalPrice')}
                >
                  מחיר עבור מוצר
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.name}>
                <td>{item.category}</td>
                <td>{item.name}</td>
                <td>{item.number}</td>
                <td>{item.price}</td>
                <td>{item.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={headerStyles.lineBreak}></div>

      {/*Total Sum*/}
      <img className={headerStyles.iconImg} src={sum > 200 ? xIcon: checkIcon} alt='checkIcon'></img>
      <p className={headerStyles.sumP}>עלות כוללת: {sum}</p>
      
    </div>
  );
}

export default Header;