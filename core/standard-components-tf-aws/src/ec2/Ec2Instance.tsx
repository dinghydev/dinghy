import z from 'zod'
import { AwsInstance, type AwsInstanceInputProps } from './AwsInstance.tsx'
import { useUserData } from './UserData.tsx'

export const Ec2InstanceInputSchema = z.object({
  userData: z.string().optional(),
})

export type Ec2InstanceInputProps =
  & z.input<typeof Ec2InstanceInputSchema>
  & AwsInstanceInputProps

export function Ec2Instance(props: Ec2InstanceInputProps) {
  const user_data = (node: any) => {
    if (props.userData) {
      return props.userData
    }

    const { userData } = useUserData(node)
    return userData?.content
  }
  return (
    <AwsInstance
      {...{ user_data, ...props }}
    />
  )
}
