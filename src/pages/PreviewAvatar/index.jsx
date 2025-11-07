import { useEffect, useState } from "react";

const styles = {
    avatar: {
        width: 100,
        height: 100,
        borderRadius: "50%",
    },
};

const defaultAvatar =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaiKiPcLJj7ufrj6M2KaPwyCT4lDSFA5oog&s";

function PreviewAvatar() {
    const [avatarUrl, setAvatarUrl] = useState("");

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setAvatarUrl(URL.createObjectURL(file));
    };

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(avatarUrl);
        };
    }, [avatarUrl]);

    return (
        <div>
            <h1>Update Avatar</h1>
            <label>
                <input type="file" hidden onChange={handleChange} />
                <img
                    style={styles.avatar}
                    src={avatarUrl || defaultAvatar}
                    alt=""
                />
            </label>
        </div>
    );
}

export default PreviewAvatar;
