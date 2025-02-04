// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/api/chat', async (req, res) => {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "L'API Key OpenAI n'est pas configurée",
      }
    });
    return;
  }
  const { message, language } = req.body;
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(message, language),
      temperature: 0.6,
    });
    res.status(200).json({ result: completion.data.choices[0].text.trim() });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: {
        message: error.response
          ? error.response.data.error.message
          : "Une erreur est survenue lors de la génération de la réponse.",
      },
    });
  }
});

function generatePrompt(message, language) {
  const whitepaperContent = `
Offical website url https://khacn.startarcoins.com
KharYsma Coins (KHACN) - A New Era of Tokenization
KHAC kharYsma coin Logo MINI
DIRECT KHACN WEBSITE URL CLICK HERE
KharYsma Coins (KHACN) is an ERC20 token designed to revolutionize decentralized finance (DeFi). With advanced features like liquidity management, automated market making, and multi-platform integration, KHACN bridges the gap between traditional economic models and modern DeFi innovations.
See NEW URL OF khacn on etherscan , https://etherscan.io/address/0x11c1b94294a7967092F747434dee4876eca5fd53
Key Features
Limited Supply: A capped supply of 10 million KHACN ensures rarity and long-term value.
DeFi Integration: Compatible with Uniswap and Chainlink for seamless market operations and real-time price updates.
Advanced Security: Equipped with proven mechanisms like Pausable and ReentrancyGuard for maximum protection.
Market Making: Automated liquidity management and token exchanges for efficient market operations.
Dynamic Growth: Automatic validation and adaptation to new platforms to support sustainable ecosystem expansion.
Current State:
Version 1 of the khacn contract has been abandoned by the team, it was at the url below: https://etherscan.io/address/0xda0ba67e1801d0c31f1cafb8197f1db4a52dbcab#code This is version 2 of the contract that has been adopted, and is now deployed with the url https://etherscan.io/address/0x11c1b94294a7967092f747434dee4876eca5fd53
The rest of the updates will be posted on our social networks below: https://x.com/xforstartarcoin https://www.facebook.com/startarcoins/ https://t.me/gbtcryptohub
Currently, the contract has just been deployed on uniswap, and is available for trading via the link https://app.uniswap.org/explore/tokens/ethereum/0x11c1b94294a7967092f747434dee4876eca5fd53?utm_source=share-tdp&utm_medium=web
KHACN VIDEO PRESENTATION LINK https://youtu.be/rqpMrf2b2h8
An Artistic and Utility-Driven Project
The name and identity of KharYsma Coins (KHACN) are inspired by the international artist KharYsma Arafat NZABA, a multi-talented individual: musician, painter, writer, photographer, and government official. KHACN is based on a real and tangible ecosystem, including the artist’s creations (books, music, artworks), which you can explore on the official website https://kharysma-an.fr
Website and Whitepaper
French White paper url ; https://1drv.ms/b/c/de8773682f045b2e/EQxfvce4LnVPmqi-Wutr484BGajVwvXtBeLLcZrbF5XfkA?e=MSq1kG
English White paper url ; https://1drv.ms/b/c/de8773682f045b2e/EQFKe2DcnwxOmOduypUz2JwB_5VEw2moxSNWp_3-UEO4dw?e=oXWnHe
Logo Url , https://github.com/startar-bronze/khacngit/raw/main/KHAC%20kharYsma%20coin%20Logo.jpg
Virus total audit https://drive.google.com/file/d/1tbNpoKqXCQy-QpLuKKAfwuOUZ2iVeXoq/view?usp=sharing
More Information
Official Website: https://khacn.startarcoins.com , Stay Updated: Follow the artist’s Facebook page for all major announcements, https://www.facebook.com/kharYsmaan
Adding NEW VERSION OF KHACN as a Custom Token on Trust Wallet and MetaMask
Trust Wallet:
Open Trust Wallet and click on "Add Custom Token." Paste the official contract address: 0x11c1b94294a7967092f747434dee4876eca5fd53 Its will automaticly Configure the parameters (Name: KharYsma Coins, Symbol: KHACN, Decimals: 18). Confirm to finalize.
MetaMask:
Open MetaMask and click on "Import Token." Paste the same official contract address. Enter the name, symbol, and decimals as mentioned above. Save to complete the process.
Email: contact@startarcoins.com
Earn even more and “Get ready for the next market boom. Add liquidity today and take advantage of it!”
Step 1: Connect your Ethereum wallet Use MetaMask or any other compatible platform to connect your wallet to Uniswap .
Step 2: Go to the kharYsma coins page Access the following link directly: https://app.uniswap.org/explore/tokens/ethereum/0x11c1b94294a7967092f747434dee4876eca5fd53?utm_source=share-tdp&utm_medium=web
Step 3: Connect your wallet, Choose Pool, Add liquidity Select “Add Liquidity” and choose ETH + kharYsma coins as pairs. Follow the instructions to complete the transaction
RESUME
KHACN Coins is an innovative ERC20 token designed to transform decentralized finance (DeFi) by leveraging a real ecosystem from the vision and creations of international artist KharYsma Arafat NZABA. It is a utility token
kharYsma coins is not just a simple ERC20 token. It is a utility token based on the tangible assets of the artist KharYsma Arafat NZABA, including musical works, paintings, books and more. The goal of KHACN is to merge creative value with the infinite possibilities of blockchain and DeFi.
The more good things there are in the life of the personality kharYsma Arafat NZABA, the better the khacn cryptocurrency will fare in the token market.
Who is kharYsma Arafat NZABA ?
Artist, entrepreneur and State Official, Male, kharYsma Arafat NZABA, real name NZABA MOUNGUENGUE Bouesse Arafat, is a multifaceted personality whose artistic and professional achievements deserve to be tokenized.
His website for his biography is https://www.kharysma-an.fr
And below some links to his works:
https://open.spotify.com/intl-fr/artist/0woprxb5wJHNG9yeZOXeG1
https://music.amazon.fr/podcasts/b1c1f76b-33ce-436a-92f0-57a9ef4e0377/les-billets-de-kharysma-lbdk
https://www.amazon.com/s?i=stripbooks&rh=p_27%3AS.E%2BBOUESSE&s=relevancerank&text=S.E+BOUESSE&ref=dp_byline_sr_book_1
https://www.youtube.com/@kharYsma_arafat_nzaba
https://www.artpal.com/kharysma
Important Note
Khacn version 2 was deployed on January 30, 2025
The name and logo of KharYsma Coins (KHACN) are protected under copyright. Unauthorized use is strictly prohibited.
`;

  const prompt = `
Vous êtes un assistant utile. Répondez en vous basant sur le contenu suivant : ${whitepaperContent}. ${message}`;

  return language === 'fr' ? `Traduit en français : ${prompt}` : prompt;
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
