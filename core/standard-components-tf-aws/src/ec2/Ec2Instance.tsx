import z from 'zod'
import { AwsInstance, type AwsInstanceInputProps } from './AwsInstance.tsx'
import { useUserData } from './UserData.tsx'

export const Ec2InstanceInputSchema = z.object({
  userData: z.any().optional(),
})

export type Ec2InstanceInputProps =
  & z.input<typeof Ec2InstanceInputSchema>
  & AwsInstanceInputProps

export function Ec2Instance(props: AwsInstanceInputProps) {
  const user_data = (node: any) => {
    const { data } = useUserData(node)
    return data?.content
  }
  return (
    <AwsInstance
      {...{ user_data, ...props }}
    />
  )
}
