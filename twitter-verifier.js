const getTweetMetadata = (tweet) => {
  const container = tweet.querySelector('[data-testid="User-Name"]');
  const userName = container.querySelector("span span").innerHTML;
  const profileURL = container.querySelector("a").href;
  const isVerifiedUser =
    container.querySelector('[data-testid="icon-verified"]') !== null;
  return {
    userName,
    profileURL,
    isVerifiedUser,
  };
};

const tweets = document.querySelectorAll('[data-testid="tweet"]');
tweets.forEach((tweet) => {
  const { userName, profileURL, isVerifiedUser } = getTweetMetadata(tweet);
});
