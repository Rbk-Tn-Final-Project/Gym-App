import React, { useState, useContext, useEffect, useRef } from 'react';
import { FaHome, FaComments, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../components/UserContext";
import './Chatbox.css';

const Chatbox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('home');
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const { user } = useContext(UserContext); 
    const navigate = useNavigate();
    const messagesEndRef = useRef(null);

    const toggleChatbox = () => setIsOpen(!isOpen);

    const handleEmailClick = () => {
        if (user) {
            navigate('/compose-message');
        } else {
            navigate('/signup');
        }
    };

    const handleHomeClick = () => {
        navigate('/');
    };

    const handleChatClick = () => {
        setActiveTab('chat');
    };

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            const userMessage = { sender: 'user', text: newMessage };
            const updatedMessages = [...messages, userMessage];

            setMessages(updatedMessages);
            setNewMessage("");

            setTimeout(() => {
                const botResponse = getAutoResponse(newMessage);
                if (botResponse) {
                    setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: botResponse }]);
                }
            }, 500); 
        }
    };

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);


    const getAutoResponse = (message) => {
        const lowerCaseMessage = message.toLowerCase();
    
        if (lowerCaseMessage.includes("operating hours")) {
            return "We are open Monday to Friday from 5 AM to 10 PM, and Saturday to Sunday from 7 AM to 8 PM.";
        } else if (lowerCaseMessage.includes("personal training")) {
            return "Yes, we offer personal training sessions. You can book a session with one of our certified trainers.";
        }  else if (lowerCaseMessage.includes("hello")) {
            return "hello How can help you.";
        }
         else if (lowerCaseMessage.includes("sign up for a membership")) {
            return "You can sign up for a membership online through our website or by visiting our front desk.";
        } else if (lowerCaseMessage.includes("types of memberships")) {
            return "We offer monthly, quarterly, and annual memberships. You can also choose between individual, couple, or family plans.";
        } else if (lowerCaseMessage.includes("trial period")) {
            return "Yes, we offer a 7-day free trial for new members.";
        } else if (lowerCaseMessage.includes("group classes")) {
            return "Yes, we offer a variety of group classes including yoga, spinning, Zumba, and more.";
        } else if (lowerCaseMessage.includes("freeze my membership")) {
            return "Yes, you can freeze your membership for up to 3 months.";
        } else if (lowerCaseMessage.includes("cancellation policy")) {
            return "You can cancel your membership at any time with a 30-day notice.";
        } else if (lowerCaseMessage.includes("locker rooms")) {
            return "Yes, we have fully equipped locker rooms with showers and lockers.";
        } else if (lowerCaseMessage.includes("towel service")) {
            return "Yes, towel service is available for an additional fee or included in premium memberships.";
        } else if (lowerCaseMessage.includes("equipment")) {
            return "We have a wide range of equipment including treadmills, ellipticals, free weights, resistance machines, and more.";
        } else if (lowerCaseMessage.includes("wi-fi")) {
            return "Yes, we offer free Wi-Fi for all our members.";
        } else if (lowerCaseMessage.includes("swimming pool")) {
            return "Yes, we have an indoor swimming pool available for members.";
        } else if (lowerCaseMessage.includes("student discounts")) {
            return "Yes, we offer discounted memberships for students with valid ID.";
        } else if (lowerCaseMessage.includes("bring a guest")) {
            return "Yes, members can bring a guest for a small fee or through guest passes included in certain memberships.";
        } else if (lowerCaseMessage.includes("child care")) {
            return "Yes, we offer on-site child care while you work out.";
        } else if (lowerCaseMessage.includes("book a class")) {
            return "You can book a class through our mobile app or by visiting the front desk.";
        } else if (lowerCaseMessage.includes("nutritionist")) {
            return "Yes, we have a certified nutritionist available for consultations.";
        } else if (lowerCaseMessage.includes("programs for seniors")) {
            return "Yes, we offer fitness programs tailored for seniors.";
        } else if (lowerCaseMessage.includes("parking")) {
            return "We offer free parking for all members.";
        } else if (lowerCaseMessage.includes("age restrictions")) {
            return "Members must be at least 14 years old. Minors need parental consent.";
        } else if (lowerCaseMessage.includes("sauna facilities")) {
            return "Yes, we have both dry and steam saunas available.";
        } else if (lowerCaseMessage.includes("payment methods")) {
            return "We accept all major credit cards, debit cards, and bank transfers.";
        } else if (lowerCaseMessage.includes("upgrade membership")) {
            return "Yes, you can upgrade your membership at any time.";
        } else if (lowerCaseMessage.includes("referral bonuses")) {
            return "Yes, we offer referral bonuses. Bring a friend, and you'll both receive a discount.";
        } else if (lowerCaseMessage.includes("access the gym after hours")) {
            return "Members with 24/7 access can enter using their key card.";
        } else if (lowerCaseMessage.includes("current promotions")) {
            return "Please check our website for the latest promotions.";
        } else if (lowerCaseMessage.includes("book a tour")) {
            return "Yes, you can book a tour by contacting us or visiting the gym.";
        } else if (lowerCaseMessage.includes("dress code")) {
            return "We recommend wearing comfortable athletic wear and proper gym shoes.";
        } else if (lowerCaseMessage.includes("spinning classes")) {
            return "Yes, we offer several spinning classes throughout the week.";
        } else if (lowerCaseMessage.includes("cancel a booked class")) {
            return "You can cancel your booking through our app or by calling the front desk.";
        } else if (lowerCaseMessage.includes("showers")) {
            return "Yes, we have showers available in our locker rooms.";
        } else if (lowerCaseMessage.includes("app")) {
            return "Yes, our app is available for download on both iOS and Android.";
        } else if (lowerCaseMessage.includes("track workouts")) {
            return "Yes, our app allows you to track your workouts and progress.";
        } else if (lowerCaseMessage.includes("beginner classes")) {
            return "Yes, we offer beginner-friendly classes for various fitness levels.";
        } else if (lowerCaseMessage.includes("personalized workout plan")) {
            return "Yes, our trainers can create a personalized workout plan for you.";
        } else if (lowerCaseMessage.includes("report an issue with equipment")) {
            return "Please report any issues to the front desk or through our app.";
        } else if (lowerCaseMessage.includes("water fountain")) {
            return "Yes, we have water fountains throughout the gym.";
        } else if (lowerCaseMessage.includes("lost something")) {
            return "Please check our lost and found at the front desk.";
        } else if (lowerCaseMessage.includes("pay for membership in advance")) {
            return "Yes, you can pay for multiple months or a year in advance.";
        } else if (lowerCaseMessage.includes("martial arts classes")) {
            return "Yes, we offer classes in various martial arts, including karate and jiu-jitsu.";
        } else if (lowerCaseMessage.includes("orientation for new members")) {
            return "Yes, we offer an orientation session for new members.";
        } else if (lowerCaseMessage.includes("buy supplements")) {
            return "Yes, we sell a variety of supplements at our front desk.";
        } else if (lowerCaseMessage.includes("weight loss classes")) {
            return "Yes, we have classes specifically designed for weight loss.";
        } else if (lowerCaseMessage.includes("update my personal information")) {
            return "You can update your information through our app or by contacting us.";
        } else if (lowerCaseMessage.includes("programs for rehabilitation")) {
            return "Yes, we offer rehabilitation programs tailored to your needs.";
        } else if (lowerCaseMessage.includes("use membership at other locations")) {
            return "Yes, with a premium membership, you can access all our locations.";
        } else if (lowerCaseMessage.includes("boxing classes")) {
            return "Yes, we offer boxing classes for all levels.";
        } else if (lowerCaseMessage.includes("pool rules")) {
            return "Yes, please check our pool rules posted in the swimming area.";
        } else if (lowerCaseMessage.includes("medical condition")) {
            return "Please consult with our trainers to find the best program for you.";
        } else if (lowerCaseMessage.includes("use the gym without a membership")) {
            return "Yes, day passes are available for purchase.";
        } else if (lowerCaseMessage.includes("discounts for veterans")) {
            return "Yes, we offer special discounts for veterans.";
        } else if (lowerCaseMessage.includes("juice bar")) {
            return "Yes, our juice bar offers a variety of healthy drinks and snacks.";
        } else if (lowerCaseMessage.includes("change my membership plan")) {
            return "Yes, you can change your plan by contacting our front desk.";
        } else if (lowerCaseMessage.includes("yoga classes")) {
            return "Yes, we offer a variety of yoga classes for all skill levels.";
        } else if (lowerCaseMessage.includes("facilities cleaned")) {
            return "Our facilities are cleaned multiple times a day to ensure a safe environment.";
        } else if (lowerCaseMessage.includes("attend classes without a membership")) {
            return "Yes, you can attend classes with a class pass or day pass.";
        } else if (lowerCaseMessage.includes("sauna")) {
            return "Yes, we have a sauna available for members.";
        } else if (lowerCaseMessage.includes("give feedback")) {
            return "You can provide feedback through our app or by speaking to our staff.";
        } else if (lowerCaseMessage.includes("bring to the gym")) {
            return "We recommend bringing a towel, water bottle, and your workout gear.";
        } else if (lowerCaseMessage.includes("corporate memberships")) {
            return "Yes, we offer corporate membership packages. Please contact us for more details.";
        } else if (lowerCaseMessage.includes("busiest times at the gym")) {
            return "The gym is usually busiest during early mornings and evenings.";
        } else if (lowerCaseMessage.includes("get a refund if I cancel my membership")) {
            return "Refunds are subject to our cancellation policy. Please contact us for details.";
        } else if (lowerCaseMessage.includes("upgrade my membership to include additional services")) {
            return "Yes, you can upgrade your membership to include services like personal training, towel service, and more.";
        } else if (lowerCaseMessage.includes("minimum age requirement for group classes")) {
            return "Participants in group classes must be at least 16 years old. Younger participants may join with parental consent.";
        } else if (lowerCaseMessage.includes("access the gym on holidays")) {
            return "Yes, we are open on most holidays, but with limited hours. Please check our holiday schedule.";
        } else if (lowerCaseMessage.includes("cycling classes")) {
            return "Yes, we offer cycling classes multiple times a week.";
        } else if (lowerCaseMessage.includes("cancel my membership")) {
            return "You can cancel your membership by filling out a cancellation form at the front desk or online through your account.";
        } else if (lowerCaseMessage.includes("loyalty program")) {
            return "Yes, we offer a loyalty program where you can earn points for attending classes, referring friends, and more.";
        } else if (lowerCaseMessage.includes("lose my membership card")) {
            return "If you lose your membership card, please visit the front desk to get a replacement. A small fee may apply.";
        } else if (lowerCaseMessage.includes("personal trainers certified")) {
            return "Yes, all our personal trainers are certified and have extensive experience.";
        } else if (lowerCaseMessage.includes("pilates studio")) {
            return "Yes, we have a dedicated Pilates studio with classes available throughout the week.";
        } else if (lowerCaseMessage.includes("pause my membership for medical reasons")) {
            return "Yes, memberships can be paused for medical reasons with appropriate documentation.";
        } else if (lowerCaseMessage.includes("discounts for long-term memberships")) {
            return "Yes, we offer discounts for members who sign up for annual memberships.";
        } else if (lowerCaseMessage.includes("additional costs for using the pool")) {
            return "The pool is included in most membership plans. Day pass users may need to pay an additional fee.";
        } else if (lowerCaseMessage.includes("schedule a fitness assessment")) {
            return "Yes, you can schedule a fitness assessment with one of our trainers at any time.";
        } else if (lowerCaseMessage.includes("classes for pregnant women")) {
            return "Yes, we offer prenatal fitness classes designed for expecting mothers.";
        } else if (lowerCaseMessage.includes("vending machines")) {
            return "Yes, we have vending machines with snacks and drinks available.";
        } else if (lowerCaseMessage.includes("receive notifications about class schedules")) {
            return "Yes, you can opt-in to receive notifications through our app.";
        } else if (lowerCaseMessage.includes("renew my membership")) {
            return "You can renew your membership online, through our app, or at the front desk.";
        } else if (lowerCaseMessage.includes("boot camp program")) {
            return "Yes, we offer boot camp classes that focus on high-intensity training.";
        } else if (lowerCaseMessage.includes("use my membership while traveling")) {
            return "Yes, with our premium membership, you can access partner gyms nationwide.";
        } else if (lowerCaseMessage.includes("refund policy for personal training sessions")) {
            return "Refunds for personal training sessions are available if canceled 24 hours in advance.";
        } else if (lowerCaseMessage.includes("classes for kids")) {
            return "Yes, we offer a variety of fitness classes designed specifically for children.";
        } else if (lowerCaseMessage.includes("book a massage")) {
            return "Yes, we offer massage therapy services. You can book an appointment at the front desk.";
        } else if (lowerCaseMessage.includes("gym is too crowded")) {
            return "We recommend visiting during off-peak hours or using our app to check real-time occupancy levels.";
        } else if (lowerCaseMessage.includes("online classes available")) {
            return "Yes, we offer a selection of online classes that you can access from home.";
        } else if (lowerCaseMessage.includes("nutritional workshops")) {
            return "Yes, we regularly host nutritional workshops. Check our schedule for upcoming events.";
        } else if (lowerCaseMessage.includes("get a tour of the gym before joining")) {
            return "Yes, we would be happy to give you a tour. Please contact us to schedule a time.";
        } else if (lowerCaseMessage.includes("strength training classes")) {
            return "Yes, we offer strength training classes that cater to all fitness levels.";
        } else if (lowerCaseMessage.includes("add biometric data to my account")) {
            return "Our trainers can assist you with adding biometric data to your profile during your fitness assessment.";
        } else if (lowerCaseMessage.includes("early morning classes")) {
            return "Yes, we offer classes starting as early as 5:30 AM.";
        } else if (lowerCaseMessage.includes("request a specific trainer for my sessions")) {
            return "Yes, you can request a specific trainer when booking your sessions.";
        } else if (lowerCaseMessage.includes("experience an injury at the gym")) {
            return "Please report any injuries to our staff immediately. We have first aid kits available, and staff trained in CPR.";
        } else if (lowerCaseMessage.includes("challenges or competitions")) {
            return "Yes, we frequently host fitness challenges and competitions. Keep an eye on our announcements!";
        } else if (lowerCaseMessage.includes("book a racquetball court")) {
            return "Yes, you can book a court through our app or at the front desk.";
        } else if (lowerCaseMessage.includes("get involved in gym events")) {
            return "You can join our events by signing up through the app or talking to the front desk.";
        } else if (lowerCaseMessage.includes("family memberships")) {
            return "Yes, we offer family memberships with access for up to four family members.";
        } else if (lowerCaseMessage.includes("contact customer service")) {
            return "You can contact our customer service via phone, email, or directly through our app.";
        } else {
            return "I’m sorry, I didn’t understand that. Could you please rephrase your question?";
        }
    };
    
    return (
        <div className="chatbox-container">
            {!isOpen && (
                <div className="floating-message-button" onClick={toggleChatbox}>
                    <span className="indicator"></span>
                    <span className="message-text">Message us</span>
                </div>
            )}
            {isOpen && (
                <div className="chatbox">
                    <div className="chatbox-header">
                        <span>Message us</span>
                        <button onClick={toggleChatbox}>_</button>
                    </div>
                    <div className="chatbox-body">
                        {activeTab === 'home' && (
                            <div className="home-content">
                                <p>Welcome to our support! How can we assist you today?</p>
                            </div>
                        )}
                        {activeTab === 'chat' && (
                            <div className="chat-content">
                                <div className="messages">
                                    {messages.map((msg, index) => (
                                        <div key={index} className={`message ${msg.sender}`}>
                                            {msg.text}
                                        </div>
                                    ))}
                                    <div ref={messagesEndRef} />
                                </div>
                                <div className="message-input">
                                    <input
                                        type="text"
                                        placeholder="Write a message..."
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                    />
                                    <button onClick={handleSendMessage}>
                                        <FaComments />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="chatbox-footer">
                        <button onClick={handleHomeClick} className={activeTab === 'home' ? 'active' : ''}>
                            <FaHome /> Home
                        </button>
                        <button onClick={handleChatClick} className={activeTab === 'chat' ? 'active' : ''}>
                            <FaComments /> Chat
                        </button>
                        <button onClick={handleEmailClick} className={activeTab === 'email' ? 'active' : ''}>
                            <FaEnvelope /> Email
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbox;