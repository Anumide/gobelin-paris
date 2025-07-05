import styled from "styled-components";

const BaseButton = styled.button`
  display: flex;
  gap: 0 0.75rem;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.25rem;
  border-radius: 9999px;
  &:active {
    border: inheret;
  }
`

export default BaseButton