const initialState = {
  taskList: [
    {
      id: 1,
      start: new Date(2022, 0, 7),
      end: new Date(2022, 0, 7),
      title: "Test",
      color: "#63b4ff",
      level: "level0",
      status: 0,
      userList: [
        {
          id: 1,
          name: "Tô Lê Hoài",
          avatarUrl:
            "https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.6435-9/119895915_1555866031245140_8317793854278817008_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=XtOqaHkCyXYAX9kiaVc&tn=zMnoluBELVnk8512&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT8z7AI6Gw-44UgiOJvgDNUvG1E2nkQQeR9G2pSEM3SjVw&oe=62061B54",
        },
      ],
    },
    {
      id: 2,
      start: new Date(2022, 0, 7),
      end: new Date(2022, 0, 16),
      title: "Đồng bộ data giữa TaskLisk và Schedule",
      color: "#ff6363",
      level: "level1",
      status: 1,
      userList: [
        {
          id: 1,
          name: "Tô Lê Hoài",
          avatarUrl:
            "https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.6435-9/119895915_1555866031245140_8317793854278817008_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=XtOqaHkCyXYAX9kiaVc&tn=zMnoluBELVnk8512&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT8z7AI6Gw-44UgiOJvgDNUvG1E2nkQQeR9G2pSEM3SjVw&oe=62061B54",
        },
        {
          id: 2,
          name: "Võ Phước Toàn",
          avatarUrl:
            "https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/69923957_1235443576620722_1229261365722480640_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=2X7SUw-rdrQAX9Ia8Pl&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT_BvfT-Qe734RbOQ7Yhkm3xDEjzdbMzbjRbEa7kE79bbg&oe=620692B3",
        },
        {
          id: 3,
          name: "Trần Trọng Nghĩa",
          avatarUrl:
            "https://www.harleytherapy.co.uk/counselling/wp-content/uploads/16297800391_5c6e812832.jpg",
        },
        {
          id: 4,
          name: "Nguyễn Văn A",
          avatarUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZWSAvhHmRxaGnNTEUNv8pHaJ261jjQMHg3ct3zSY3UMtVeWENM2X4L2BXWIx4nNkVY6g&usqp=CAU",
        },
      ],
    },
    {
      id: 3,
      start: new Date(2022, 0, 10),
      end: new Date(2022, 0, 21),
      title: "An ninh mạng",
      color: "#1cce66",
      level: "level0",
      status: 2,
      userList: [
        {
          id: 1,
          name: "Tô Lê Hoài",
          avatarUrl:
            "https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.6435-9/119895915_1555866031245140_8317793854278817008_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=XtOqaHkCyXYAX9kiaVc&tn=zMnoluBELVnk8512&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT8z7AI6Gw-44UgiOJvgDNUvG1E2nkQQeR9G2pSEM3SjVw&oe=62061B54",
        },
        {
          id: 2,
          name: "Võ Phước Toàn",
          avatarUrl:
            "https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/69923957_1235443576620722_1229261365722480640_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=2X7SUw-rdrQAX9Ia8Pl&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT_BvfT-Qe734RbOQ7Yhkm3xDEjzdbMzbjRbEa7kE79bbg&oe=620692B3",
        },
      ],
    },
    {
      id: 4,
      start: new Date(2022, 0, 10),
      end: new Date(2022, 1, 11),
      title: "Tạo form AddTask bằng Formik và validation",
      color: "#ffcb12",
      level: "level2",
      status: 1,
      userList: [
        {
          id: 1,
          name: "Tô Lê Hoài",
          avatarUrl:
            "https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.6435-9/119895915_1555866031245140_8317793854278817008_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=XtOqaHkCyXYAX9kiaVc&tn=zMnoluBELVnk8512&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT8z7AI6Gw-44UgiOJvgDNUvG1E2nkQQeR9G2pSEM3SjVw&oe=62061B54",
        },
        {
          id: 2,
          name: "Võ Phước Toàn",
          avatarUrl:
            "https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/69923957_1235443576620722_1229261365722480640_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=2X7SUw-rdrQAX9Ia8Pl&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT_BvfT-Qe734RbOQ7Yhkm3xDEjzdbMzbjRbEa7kE79bbg&oe=620692B3",
        },
        {
          id: 3,
          name: "Trần Trọng Nghĩa",
          avatarUrl:
            "https://www.harleytherapy.co.uk/counselling/wp-content/uploads/16297800391_5c6e812832.jpg",
        },
      ],
    },
    {
      id: 5,
      start: new Date(2022, 0, 10),
      end: new Date(2022, 0, 25),
      title: "Niên luận ngành",
      color: "#9e63ff",
      level: "level1",
      status: 0,
      userList: [
        {
          id: 1,
          name: "Tô Lê Hoài",
          avatarUrl:
            "https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.6435-9/119895915_1555866031245140_8317793854278817008_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=XtOqaHkCyXYAX9kiaVc&tn=zMnoluBELVnk8512&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT8z7AI6Gw-44UgiOJvgDNUvG1E2nkQQeR9G2pSEM3SjVw&oe=62061B54",
        },
        {
          id: 2,
          name: "Võ Phước Toàn",
          avatarUrl:
            "https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/69923957_1235443576620722_1229261365722480640_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=2X7SUw-rdrQAX9Ia8Pl&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT_BvfT-Qe734RbOQ7Yhkm3xDEjzdbMzbjRbEa7kE79bbg&oe=620692B3",
        },
        {
          id: 3,
          name: "Trần Trọng Nghĩa",
          avatarUrl:
            "https://www.harleytherapy.co.uk/counselling/wp-content/uploads/16297800391_5c6e812832.jpg",
        },
      ],
    },
    {
      id: 6,
      start: new Date(2022, 0, 7),
      end: new Date(2022, 0, 7),
      title: "Test",
      color: "#63b4ff",
      level: "level0",
      status: 0,
      userList: [
        {
          id: 1,
          name: "Tô Lê Hoài",
          avatarUrl:
            "https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.6435-9/119895915_1555866031245140_8317793854278817008_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=XtOqaHkCyXYAX9kiaVc&tn=zMnoluBELVnk8512&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT8z7AI6Gw-44UgiOJvgDNUvG1E2nkQQeR9G2pSEM3SjVw&oe=62061B54",
        },
      ],
    },
    {
      id: 8,
      start: new Date(2022, 0, 10),
      end: new Date(2022, 0, 25),
      title: "Test",
      color: "#63b4ff",
      level: "level0",
      status: 0,
      userList: [
        {
          id: 1,
          name: "Tô Lê Hoài",
          avatarUrl:
            "https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.6435-9/119895915_1555866031245140_8317793854278817008_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=XtOqaHkCyXYAX9kiaVc&tn=zMnoluBELVnk8512&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT8z7AI6Gw-44UgiOJvgDNUvG1E2nkQQeR9G2pSEM3SjVw&oe=62061B54",
        },
      ],
    },
    {
      id: 2,
      start: new Date(2022, 0, 7),
      end: new Date(2022, 0, 16),
      title: "Đồng bộ data giữa TaskLisk và Schedule",
      color: "#ff6363",
      level: "level1",
      status: 1,
      userList: [
        {
          id: 1,
          name: "Tô Lê Hoài",
          avatarUrl:
            "https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.6435-9/119895915_1555866031245140_8317793854278817008_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=XtOqaHkCyXYAX9kiaVc&tn=zMnoluBELVnk8512&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT8z7AI6Gw-44UgiOJvgDNUvG1E2nkQQeR9G2pSEM3SjVw&oe=62061B54",
        },
        {
          id: 2,
          name: "Võ Phước Toàn",
          avatarUrl:
            "https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/69923957_1235443576620722_1229261365722480640_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=2X7SUw-rdrQAX9Ia8Pl&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT_BvfT-Qe734RbOQ7Yhkm3xDEjzdbMzbjRbEa7kE79bbg&oe=620692B3",
        },
        {
          id: 3,
          name: "Trần Trọng Nghĩa",
          avatarUrl:
            "https://www.harleytherapy.co.uk/counselling/wp-content/uploads/16297800391_5c6e812832.jpg",
        },
        {
          id: 4,
          name: "Nguyễn Văn A",
          avatarUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZWSAvhHmRxaGnNTEUNv8pHaJ261jjQMHg3ct3zSY3UMtVeWENM2X4L2BXWIx4nNkVY6g&usqp=CAU",
        },
      ],
    },
  ],
  selectEvent: [],
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_EVENT": {
      console.log("dispatch");

      return { ...state, selectEvent: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default eventReducer;
