import React from "react";
import { faker } from "@faker-js/faker";

const UserGroup = () => {
  return (
    <div className="avatar-group w-full justify-end -space-x-3">
      <div className="avatar">
        <div className="w-6">
          <img src={faker.image.avatar()} />
        </div>
      </div>
      <div className="avatar">
        <div className="w-6">
          <img src={faker.image.avatar()} />
        </div>
      </div>
      <div className="avatar">
        <div className="w-6">
          <img src={faker.image.avatar()} />
        </div>
      </div>
    </div>
  );
};

export default UserGroup;
