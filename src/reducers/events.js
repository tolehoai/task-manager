const initialState = {
  taskList: [
    {
      id: 1,
      start: new Date(2022, 0, 7),
      end: new Date(2022, 0, 7),
      title: "Tạo giao diện đăng nhập/đăng ký",
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
      id: 4,
      start: new Date(2022, 0, 7),
      end: new Date(2022, 0, 7),
      title: "Tạo giao diện trang chủ",
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
      id: 5,
      start: new Date(2022, 0, 7),
      end: new Date(2022, 0, 7),
      title: "Tạo các Router",
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
      id: 6,
      start: new Date(2022, 0, 7),
      end: new Date(2022, 0, 7),
      title: "Tạo giao diện trang chi tiết task",
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
      id: 7,
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
      id: 8,
      start: new Date(2022, 0, 10),
      end: new Date(2022, 0, 21),
      title: "An ninh mạng",
      color: "#1cce66",
      level: "level2",
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
      id: 9,
      start: new Date(2022, 0, 10),
      end: new Date(2022, 1, 11),
      title: "Tạo form AddTask bằng Formik và validation",
      color: "#ffcb12",
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
      ],
    },
    {
      id: 10,
      start: new Date(2022, 0, 10),
      end: new Date(2022, 0, 25),
      title: "Niên luận ngành",
      color: "#9e63ff",
      level: "level0",
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
      id: 11,
      start: new Date(2022, 0, 7),
      end: new Date(2022, 0, 7),
      title: "Tạo giao diện hệ thống",
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
      id: 12,
      start: new Date(2022, 0, 12),
      end: new Date(2022, 0, 30),
      title: "An toàn hệ thống",
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
      id: 13,
      start: new Date(2022, 0, 12),
      end: new Date(2022, 2, 30),
      title: "Sự kiện đến tháng 3, đi qua tháng 1 và 2",
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
      id: 13,
      start: new Date(2022, 0, 12),
      end: new Date(2022, 2, 30),
      title: "Sự kiện đến tháng 3, đi qua tháng 1 và 2",
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
      id: 13,
      start: new Date(2022, 0, 12),
      end: new Date(2022, 2, 30),
      title: "Sự kiện đến tháng 3, đi qua tháng 1 và 2",
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
      id: 13,
      start: new Date(2022, 0, 12),
      end: new Date(2022, 2, 30),
      title: "Sự kiện đến tháng 3, đi qua tháng 1 và 2",
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
      id: 13,
      start: new Date(2022, 0, 12),
      end: new Date(2022, 2, 30),
      title: "Sự kiện đến tháng 3, đi qua tháng 1 và 2",
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
      id: 13,
      start: new Date(2022, 0, 12),
      end: new Date(2022, 2, 30),
      title: "Sự kiện đến tháng 3, đi qua tháng 1 và 2",
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
  selectEvent: {},
  selectMonth: null,
  selectYear: null,
  heightOfRow: 3000,
  currentView : "month"
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_EVENT": {
      return { ...state, selectEvent: action.payload };
    }
    case "SELECT_MONTH": {
      const newMonth = action.payload;
      return { ...state, selectMonth: newMonth };
    }
    case "SELECT_YEAR": {
      const newYear = action.payload;
      return { ...state, selectYear: newYear };
    }
    case "CHANGE_HEIGHT": {
      const newHeight = action.payload;
      return { ...state, heightOfRow: newHeight };
    }

    case "CHANGE_MONTH": {
      console.log("CHANGE MONTH: ", action.payload);
      const newMonth = action.payload.slMonth;
      const newYear = action.payload.slYear;
      const newHeight = action.payload.number;

      return {
        ...state,
        selectMonth: newMonth,
        selectYear: newYear,
        heightOfRow: newHeight * 350,
      };
    }

    case "CHANGE_VIEW": {
      const newView = action.payload;
      return { ...state, currentView: newView };
    }

    default: {
      return state;
    }
  }
};

export default eventReducer;
