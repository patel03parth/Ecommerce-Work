import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios';

export default function UsingReducer() {

    const myState = [];

    const myReducer = (state, action) => {

        switch (action.type) {

            case "ADD":

                return [...state, action.payload];

            case "Delete":

                return state.filter((d, index) => {

                    return index != action.payload;
                });


            case "Save":

                return state.map((d, myundex) => {

                    if (myundex == action.index) {
                        return action.payload;
                    }
                    else {
                        return d;
                    }

                });

            default:

                return state;
        }

    }

    const mySave = (e) => {

        if (index >= 0) {
            setData({ type: "Save", payload: input, index: index });
            setInput({ ...input});
            setIndex(-1);
            console.log(input);
        }
        else {
            setData({ type: "ADD", payload: input });
        }
    }
    const [data, setData] = useReducer(myReducer, myState);
    const [input, setInput] = useState();
    const [index, setIndex] = useState(-1);

    useEffect(() => {

        axios('https://fakestoreapi.com/products')

            .then(y => {

                setInput(y.data);
                console.log(y);

            })

    }, [])

    const myDelete = (index) => {

        setData({ type: "Delete", payload: index, });
    }

    const edit = (index) => {

        setInput(data[index]);
        setIndex(index);

    }

    return (
        <div>

            {input?.map((element, index) => {
                return (
                    <section className='Main' key={index}>
                        <div className='CARD' >
                            <img src={element.image} alt={element.title} />
                            <h5 className="">{element.title}</h5>
                            <p className="">{element.category}</p>
                            <p className="">${element.price}<sup>99</sup></p>
                            <button className='Btn' onClick={mySave}>Add To Cart</button>
                        </div>
                    </section>
                )
            })}

            <table className="table table-bordered mt-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">title</th>
                        <th scope="col">category</th>
                        <th scope="col">price</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((x, index) => {
                        return (
                            <tr id='abc' key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{x.title}</td>
                                <td>{x.category}</td>
                                <td>{x.price}</td>
                                <td><button onClick={() => edit(index)} style={{ backgroundColor: "green" }}>Update</button></td>
                                <td><button onClick={() => myDelete(index)} style={{ backgroundColor: "red" }}>Delete</button></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}