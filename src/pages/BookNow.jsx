import React from 'react'
import { BookBody, BookColumn, BookContainer, BookDef, BookHeading, BookImg, BookRow, BookSvg, BookTel, BookTitle, CallDiv, ListCard, ListRow, TelTalk, Title } from '../elements/BookNowElements'

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
          <BookRow>
            <Title>Types of Services Requested</Title>
              <BookColumn>
            
                  <ListCard>
                     <BookImg/>
                     <BookTitle>Any Name</BookTitle>
                  </ListCard>
                  <ListCard>
                     <BookImg/>
                     <BookTitle>Any Name</BookTitle>
                  </ListCard>
                  <ListCard>
                     <BookImg/>
                     <BookTitle>Any Name</BookTitle>
                  </ListCard>
                  <ListCard>
                     <BookImg/>
                     <BookTitle>Any Name</BookTitle>
                  </ListCard>
                  <ListCard>
                     <BookImg/>
                     <BookTitle>Any Name</BookTitle>
                  </ListCard>
                  <ListCard>
                     <BookImg/>
                     <BookTitle>Any Name</BookTitle>
                  </ListCard>
              
              </BookColumn>
          </BookRow>
        </BookContainer>
    </BookBody>
  )
}

export default BookNow