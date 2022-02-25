import React from 'react'
import { BookBody, BookContainer, BookDef, BookHeading, BookSvg, BookTel, CallDiv, TelTalk } from '../elements/BookNowElements'

function BookNow() {
  return (
    <BookBody>
        <BookContainer>
            <BookSvg width={90} viewBox ="0 0 90 90" height={90} />
            <BookHeading></BookHeading>
            <BookDef></BookDef>
            <CallDiv>
                <BookTel href='tel: 050-088-2796'>050-088-2796</BookTel>
                <TelTalk></TelTalk>
            </CallDiv>
          
        </BookContainer>
    </BookBody>
  )
}

export default BookNow