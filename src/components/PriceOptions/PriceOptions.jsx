import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Group fitness classes"
          ],
          "price": 29.99
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Group fitness classes",
            "Personal trainer sessions (2/month)",
            "Sauna access"
          ],
          "price": 59.99
        },
        {
          "id": 3,
          "name": "Student Membership",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Student ID required"
          ],
          "price": 19.99
        },
        {
          "id": 4,
          "name": "Family Membership",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Group fitness classes",
            "Childcare services",
            "Family of four (2 adults, 2 children)"
          ],
          "price": 99.99
        },
        {
          "id": 5,
          "name": "Senior Membership",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Group fitness classes",
            "Senior citizen discount (age 65+)"
          ],
          "price": 24.99
        },
        {
            "id": 6,
            "name": "Permanent Membership",
            "features": [
              "Access to gym equipment",
              "Locker room access",
              "Group fitness classes",
              "Senior citizen discount (age 65+)"
            ],
            "price": 24.99
          }
      ]
      
    return (
        <div>
            <h2 className="text-5xl font-bold text-center my-3 text-green-700">Best Price in the town</h2>
            <div className="grid md:grid-cols-3">
            
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
        </div>
    );
};

export default PriceOptions;