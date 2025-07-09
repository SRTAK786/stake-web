// कॉन्ट्रैक्ट एड्रेस और ABI
const contractAddress = "0x94bC53fD2D7915fD70A120eBfb96bB99A81fFfeF";
const contractABI = [{"inputs":[{"internalType":"address","name":"_vnstToken","type":"address"},{"internalType":"address","name":"_vntToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_vnstStakingWallet","type":"address"},{"internalType":"address","name":"_vntRewardWallet","type":"address"},{"internalType":"address","name":"_usdtRewardWallet","type":"address"},{"internalType":"address","name":"_autoStakeWallet","type":"address"},{"internalType":"address","name":"_feeWallet","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"Blacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPercent","type":"uint256"}],"name":"ROIPercentChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"inVNST","type":"bool"}],"name":"ReferralEarned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"vntAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"RewardClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"RewardRateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newMin","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newMax","type":"uint256"}],"name":"StakeLimitsUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newVnstPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newVntPrice","type":"uint256"}],"name":"TokenPricesUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"Unblacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"CLAIM_INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_VNT_WITHDRAWAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARD_INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WITHDRAWAL_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"annualRewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"autoStakeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"blacklistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"user","type":"address"}],"name":"createFirstStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dailyROIPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"directIncomePercents","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"forceClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"level","type":"uint256"}],"name":"getLevelReferralCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"level","type":"uint256"}],"name":"getLevelReferrals","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getPendingRewards","outputs":[{"internalType":"uint256","name":"vntReward","type":"uint256"},{"internalType":"uint256","name":"usdtReward","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getReferralCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserStats","outputs":[{"internalType":"uint256","name":"totalStaked","type":"uint256"},{"internalType":"uint256","name":"totalEarned","type":"uint256"},{"internalType":"uint256","name":"directMembers","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWalletBalances","outputs":[{"internalType":"uint256","name":"vnstStakingBalance","type":"uint256"},{"internalType":"uint256","name":"vntRewardBalance","type":"uint256"},{"internalType":"uint256","name":"usdtRewardBalance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"levelReferrals","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxStakeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minStakeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"referrals","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"requiredDirectMembers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"pendingVNT","type":"uint256"},{"internalType":"uint256","name":"pendingUSDT","type":"uint256"},{"internalType":"uint256","name":"claimedVNT","type":"uint256"},{"internalType":"uint256","name":"claimedUSDT","type":"uint256"},{"internalType":"uint256","name":"lastClaimTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dailyROIPercent","type":"uint256"}],"name":"setDailyROIPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_annualRewardRate","type":"uint256"}],"name":"setRewardRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMin","type":"uint256"},{"internalType":"uint256","name":"newMax","type":"uint256"}],"name":"setStakeLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_vnstPrice","type":"uint256"},{"internalType":"uint256","name":"_vntPrice","type":"uint256"}],"name":"setTokenPrices","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_vnstStakingWallet","type":"address"},{"internalType":"address","name":"_vntRewardWallet","type":"address"},{"internalType":"address","name":"_usdtRewardWallet","type":"address"},{"internalType":"address","name":"_autoStakeWallet","type":"address"},{"internalType":"address","name":"_feeWallet","type":"address"}],"name":"setWallets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakes","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"lastClaimTime","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"},{"internalType":"bool","name":"active","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"unblacklistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtRewardWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userStats","outputs":[{"internalType":"uint256","name":"totalDirectMembers","type":"uint256"},{"internalType":"uint256","name":"totalStaked","type":"uint256"},{"internalType":"uint256","name":"totalEarned","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstStakingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntRewardWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"}];

// DOM एलिमेंट्स
const walletConnectBtn = document.getElementById('walletConnectBtn');
const walletModal = document.getElementById('walletModal');
const closeModal = document.querySelector('.close-modal');
const metamaskBtn = document.getElementById('metamaskBtn');
const walletConnectModalBtn = document.getElementById('walletConnectBtn');
const trustWalletBtn = document.getElementById('trustWalletBtn');
const binanceChainBtn = document.getElementById('binanceChainBtn');

// वेब3 और कॉन्ट्रैक्ट इंस्टेंस
let web3;
let stakingContract;
let accounts = [];
let walletConnectProvider;

// इनिशियलाइज़ेशन
window.addEventListener('load', async () => {
    // कार्ड्स एनिमेशन
    animateCards();
    
    // वॉलेट कनेक्शन इवेंट्स
    walletConnectBtn.addEventListener('click', () => {
        walletModal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        walletModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === walletModal) {
            walletModal.style.display = 'none';
        }
    });

    // वॉलेट ऑप्शन्स
    metamaskBtn.addEventListener('click', connectMetaMask);
    walletConnectModalBtn.addEventListener('click', connectWalletConnect);
    trustWalletBtn.addEventListener('click', connectTrustWallet);
    binanceChainBtn.addEventListener('click', connectBinanceChain);

    // चेक अगर पहले से ही कनेक्टेड है
    if (window.ethereum) {
        try {
            accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts.length > 0) {
                await initWeb3();
                updateUI();
            }
        } catch (error) {
            console.error("Error checking connected accounts:", error);
        }
    }
});

// कार्ड्स एनिमेशन फंक्शन
function animateCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, 150 * index);
    });
}

// वेब3 इनिशियलाइज़ेशन
async function initWeb3() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.enable();
            stakingContract = new web3.eth.Contract(contractABI, contractAddress);
            return true;
        } catch (error) {
            console.error("User denied account access:", error);
            return false;
        }
    } else if (window.web3) {
        web3 = new web3(window.web3.currentProvider);
        stakingContract = new web3.eth.Contract(contractABI, contractAddress);
        return true;
    } else {
        console.log("Non-Ethereum browser detected. Consider installing MetaMask!");
        return false;
    }
}

// मेटामास्क कनेक्शन
async function connectMetaMask() {
    if (window.ethereum) {
        try {
            accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            if (await initWeb3()) {
                walletConnectBtn.textContent = accounts[0].substring(0, 6) + '...' + accounts[0].substring(38);
                walletConnectBtn.classList.add('connected');
                walletModal.style.display = 'none';
                updateUI();
                showSuccessMessage("Wallet connected successfully!");
            }
        } catch (error) {
            console.error("Error connecting to MetaMask:", error);
            showErrorMessage("Failed to connect MetaMask");
        }
    } else {
        showErrorMessage("MetaMask not installed!");
    }
}

// वॉलेटकनेक्ट कनेक्शन (अपडेटेड v2)
async function connectWalletConnect() {
    try {
        // WalletConnect v2 प्रोवाइडर
        walletConnectProvider = new WalletConnectProvider.default({
            projectId: "6b5d394c8625d20907158af24ba88deb", // WalletConnect Cloud से प्राप्त करें
            chains: [56], // BSC मेननेट के लिए
            showQrModal: true,
            qrModalOptions: {
                themeMode: "dark",
                themeVariables: {
                    '--wcm-z-index': '9999'
                }
            }
        });
        
        await walletConnectProvider.enable();
        web3 = new Web3(walletConnectProvider);
        stakingContract = new web3.eth.Contract(contractABI, contractAddress);
        
        accounts = await web3.eth.getAccounts();
        walletConnectBtn.textContent = `${accounts[0].substring(0, 6)}...${accounts[0].substring(38)}`;
        walletConnectBtn.classList.add('connected');
        walletModal.style.display = 'none';
        updateUI();
        showSuccessMessage("WalletConnect connected successfully!");
        
        // कनेक्शन इवेंट्स
        walletConnectProvider.on("disconnect", () => {
            walletConnectBtn.textContent = "Connect Wallet";
            walletConnectBtn.classList.remove('connected');
            showErrorMessage("Wallet disconnected");
        });
        
    } catch (error) {
        console.error("Error connecting with WalletConnect:", error);
        showErrorMessage("Failed to connect with WalletConnect");
    }
}

// ट्रस्ट वॉलेट कनेक्शन
async function connectTrustWallet() {
    if (window.ethereum && window.ethereum.isTrust) {
        try {
            accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            if (await initWeb3()) {
                walletConnectBtn.textContent = accounts[0].substring(0, 6) + '...' + accounts[0].substring(38);
                walletConnectBtn.classList.add('connected');
                walletModal.style.display = 'none';
                updateUI();
                showSuccessMessage("Trust Wallet connected successfully!");
            }
        } catch (error) {
            console.error("Error connecting to Trust Wallet:", error);
            showErrorMessage("Failed to connect Trust Wallet");
        }
    } else {
        showErrorMessage("Trust Wallet not detected!");
    }
}

// बाइनेंस चेन कनेक्शन
async function connectBinanceChain() {
    if (window.BinanceChain) {
        try {
            accounts = await window.BinanceChain.request({ method: 'eth_requestAccounts' });
            web3 = new Web3(window.BinanceChain);
            stakingContract = new web3.eth.Contract(contractABI, contractAddress);
            
            walletConnectBtn.textContent = accounts[0].substring(0, 6) + '...' + accounts[0].substring(38);
            walletConnectBtn.classList.add('connected');
            walletModal.style.display = 'none';
            updateUI();
            showSuccessMessage("Binance Chain connected successfully!");
        } catch (error) {
            console.error("Error connecting to Binance Chain:", error);
            showErrorMessage("Failed to connect Binance Chain");
        }
    } else {
        showErrorMessage("Binance Chain Wallet not detected!");
    }
}

// UI अपडेट फंक्शन
async function updateUI() {
    if (!stakingContract || accounts.length === 0) return;

    try {
        // यूजर का स्टेक डिटेल्स
        const stakeInfo = await stakingContract.methods.stakes(accounts[0]).call();
        document.getElementById('userStake').textContent = web3.utils.fromWei(stakeInfo.amount, 'ether') + " VNST";
        document.getElementById('stakedAmount').textContent = web3.utils.fromWei(stakeInfo.amount, 'ether');
        
        if (stakeInfo.startTime > 0) {
            document.getElementById('stakeStartTime').textContent = new Date(stakeInfo.startTime * 1000).toLocaleString();
        }
        
        if (stakeInfo.lastClaimTime > 0) {
            document.getElementById('lastClaimTime').textContent = new Date(stakeInfo.lastClaimTime * 1000).toLocaleString();
        }

        // पेंडिंग रिवॉर्ड्स
        const rewardsInfo = await stakingContract.methods.getPendingRewards(accounts[0]).call();
        document.getElementById('pendingVNT').textContent = web3.utils.fromWei(rewardsInfo.vntReward, 'ether');
        document.getElementById('pendingUSDT').textContent = web3.utils.fromWei(rewardsInfo.usdtReward, 'ether');
        
        // क्लेमेबल रिवॉर्ड्स
        const rewardDetails = await stakingContract.methods.rewards(accounts[0]).call();
        document.getElementById('claimableVNT').textContent = web3.utils.fromWei(rewardDetails.pendingVNT, 'ether');
        document.getElementById('claimableUSDT').textContent = web3.utils.fromWei(rewardDetails.pendingUSDT, 'ether');
        
        if (rewardDetails.lastClaimTime > 0) {
            document.getElementById('rewardLastClaim').textContent = new Date(rewardDetails.lastClaimTime * 1000).toLocaleString();
        }

        // रेफरल डिटेल्स
        const userStats = await stakingContract.methods.userStats(accounts[0]).call();
        document.getElementById('directMembers').textContent = userStats.totalDirectMembers;
        document.getElementById('directEarnings').textContent = web3.utils.fromWei(userStats.totalEarned, 'ether') + " USDT";
        
        // रेफरल लिंक
        document.getElementById('referralLink').value = `${window.location.href}?ref=${accounts[0]}`;
        
        // टोटल स्टेक्ड
        const totalStaked = await stakingContract.methods.getWalletBalances().call();
        document.getElementById('totalStaked').textContent = web3.utils.fromWei(totalStaked.vnstStakingBalance, 'ether') + " VNST";

    } catch (error) {
        console.error("Error updating UI:", error);
    }
}

// सक्सेस मैसेज डिस्प्ले
function showSuccessMessage(message) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'success-message';
    msgDiv.textContent = message;
    document.body.appendChild(msgDiv);
    
    setTimeout(() => {
        msgDiv.remove();
    }, 5000);
}

// एरर मैसेज डिस्प्ले
function showErrorMessage(message) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'error-message';
    msgDiv.textContent = message;
    document.body.appendChild(msgDiv);
    
    setTimeout(() => {
        msgDiv.remove();
    }, 5000);
}

// रेफरल लिंक कॉपी करने के लिए
document.getElementById('copyReferralBtn').addEventListener('click', () => {
    const referralLink = document.getElementById('referralLink');
    referralLink.select();
    document.execCommand('copy');
    showSuccessMessage("Referral link copied to clipboard!");
});
