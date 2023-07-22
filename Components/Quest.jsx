const { challenge } = props;

const Box = styled.div`
    box-sizing:border-box;
    padding:1rem;
    width:100%;
    max-width:300px;
    border: 1px solid rgba(0,0,0,.05);
    box-shadow: 0 0 20px rgba(0,0,0,.05);
    border-radius: 10px;
`;

const Title = styled.div`
    font-size:1.4rem;
    font-weight:bold;
`;

const Status = styled.div`
    display:inline-block;
    padding:.2rem .5rem;
    background-color:#2fbc2f;
    border-radius:20px;
    font-size:.7rem;
    color:#fff;
    font-weight:bold;
    margin:10px 0;
`;

const Button = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:bold;
    color:#fff;
    width:100%;
    height:50px;
    border-radius:10px;
    background-color:#2fbc2f;
    text-align:center;
`;

const Prize = styled.div`
  display:flex;
  font-size:.7rem;
  background-color:orange;
  border-radius:20px;
  padding:.2rem .2rem;
  color:#fff;
  font-weight:bold;
  min-width:70px;
  justify-content:center;
  align-items:center;

  img {
    max-width:20px;
    margin-right:5px;
  }
`;

const Badges = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;

  > div {
    &:not(:last-of-type) {
      margin-right: 10px;
    }
  }

`;

const Description = styled.div`
  opacity:.7;
  padding: 1rem .2rem;
  font-size:.8rem;

  p {
    margin:0;
    padding:0;
  }
`;

return (
  <Box>
    <Title>The Lost Jewels of Montmartre</Title>
    <Badges>
      <Prize>
        <img src="https://ipfs.near.social/ipfs/bafkreifgnes6e5xuxaeknpm3q7tgk4m5yy2zb4nof3th34pawx5lbr5654" />{" "}
        1 ETH
      </Prize>
      <Status>Ongoing</Status>
    </Badges>
    <Description>
      <p>
        This is the description of the actual quest that is going on and will
        provide hints for users to get to know about the places they have to go
        in order to find the treasure.
      </p>
    </Description>
    <Button>Join the challenge</Button>
  </Box>
);
