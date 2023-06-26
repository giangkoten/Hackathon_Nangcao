import React, { useState } from 'react'
import "./StyleItemBuy.css"

function FormItemBuy({dataProps,deleteContrustor}) {
    const itemBuy = dataProps.filter((item) => item.numberBuy > 0)
    const handleDelete = (id) => {
        deleteContrustor(id)
    }
    
    let totalPrice = 0;
    for (let i = 0; i < itemBuy.length; i++) {
      const item = itemBuy[i];
      totalPrice += item.numberBuy * item.price;
    }
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Tên</th>
                    <th>Ảnh</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                    <th>Tổng tiền</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                {itemBuy.map((item) => {
                    return(
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td><img src={item.image_url} alt="" /></td>
                            <td>{item.numberBuy}
                            <button 
                            style={{backgroundColor:"green"}}
                            ><i class="fa-solid fa-caret-up"></i></button>
                            <button 
                            style={{backgroundColor:"blue"}}
                            ><i class="fa-solid fa-caret-down"></i></button>
                            </td>
                            <td>{item.price}$</td>
                            <td>{item.numberBuy * item.price}$</td>
                            <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
                        </tr>
                    )
                })}
                    
                
            </tbody>
            <h4>Tổng Giá tiền : {totalPrice}$</h4>
        </table>
    </div>
  )
}

export default FormItemBuy