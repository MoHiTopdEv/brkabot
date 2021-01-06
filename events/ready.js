module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("WITH 1K+ ONLINE MEMBERS IN BT", {
    type: "STREAMING", url: "https://www.twitch.tv/something" 
    //can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
