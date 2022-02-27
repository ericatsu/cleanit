import React from 'react'
import { BookBody, BookColumn, BookContainer, BookDef, BookHeading, BookImg, BookRow, BookSvg, BookTel, BookTitle, CallDiv, ListColumn, ListRow, TelTalk, Title } from '../elements/BookNowElements'

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
            <Title>Types of Services Requested</Title>
          <BookRow>
              <BookColumn>
              <ListRow>
                  <ListColumn>
                     
                  </ListColumn>
                  <ListColumn>
                     
                  </ListColumn>
                  <ListColumn>
                     
                  </ListColumn>
                  <ListColumn>
                     
                  </ListColumn>
                  <ListColumn>
                     
                  </ListColumn>
                  <ListColumn>
                     
                  </ListColumn>
              </ListRow>
              </BookColumn>
          </BookRow>
        </BookContainer>
    </BookBody>
  )
}

export default BookNow