import { useState } from 'react';
import { Input, Space } from 'antd';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  status: "" | "error" | "warning" | undefined
  placeholder: string;
}

  const Password: React.FC<Props> = ( props ) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
      <Space direction="horizontal">
      <Input.Password
        placeholder={props.placeholder} name="password" value={props.value} onChange={props.onChange} status={props.status}
        visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
      />
        
      </Space>
    );
  };

export default Password