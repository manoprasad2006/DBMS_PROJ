import React from 'react'
import styled from 'styled-components'
import { dateFormat } from '../../utils/dateFormat';
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../../utils/icons';
import Button from '../button/button';

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {

    const categoryIcon = () =>{
        switch(category) {
            case 'salary':
                return money;
            case 'freelancing':
                return freelance
            case 'investments':
                return stocks;
            case 'stocks':
                return users;
            case 'bitcoin':
                return bitcoin;
            case 'bank':
                return card;
            case 'youtube':
                return yt;
            case 'other':
                return piggy;
            default:
                return ''
        }
    }

    const expenseCatIcon = () => {
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'takeaways':
                return takeaway;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return ''
        }
    }

    console.log('type', type)

    return (
        <IncomeItemStyled indicator={indicatorColor}>
            <div className="icon">
                {type === 'expense' ? expenseCatIcon() : categoryIcon()}
            </div>
            <div className="content">
                <h5>{title}</h5>
                
                <div className="inner-content">
                    <div className="text">
                        <p>{dollar} {amount}</p>
                        <p>{calender} {dateFormat(date)}</p>
                        <p>
                            {comment}
                            {description}
                        </p>
                    </div>
                    <div className="btn-con">
                        <Button 
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'var(--color-green)'}
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
        </IncomeItemStyled>
    )
}

const IncomeItemStyled = styled.div`
    background: white;
    border: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    color: #222260;
    transition: all 0.3s ease;

    &:hover {
        transform: translateX(5px);
    }

    .icon {
        width: 60px;
        height: 60px;
        border-radius: 15px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        flex-shrink: 0;

        i {
            font-size: 2rem;
            color: var(--primary-color);
        }
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        h5 {
            font-size: 1.2rem;
            font-weight: 500;
            padding-left: 1.5rem;
            position: relative;
            display: flex;
            align-items: center;

            &::before {
                content: '';
                position: absolute;
                left: 0;
                width: 0.6rem;
                height: 0.6rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }

        .inner-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-left: 1.5rem;

            .text {
                display: flex;
                align-items: center;
                gap: 2rem;

                p {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #666;
                    font-size: 1rem;

                    svg {
                        font-size: 1.2rem;
                        color: var(--primary-color);
                    }
                }
            }
        }
    }

    .delete-icon {
        color: #FF0000;
        cursor: pointer;
        font-size: 1.5rem;
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.2);
        }
    }

    @media (max-width: 580px) {
        flex-direction: column;
        
        .icon {
            width: 50px;
            height: 50px;
        }

        .content {
            width: 100%;
            
            .inner-content {
                flex-direction: column;
                gap: 1rem;
                
                .text {
                    flex-wrap: wrap;
                    justify-content: center;
                }
            }
        }
    }

`;

export default IncomeItem