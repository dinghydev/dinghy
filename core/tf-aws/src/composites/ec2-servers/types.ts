import {
  getRenderOptions,
  ResolvableStringSchema,
} from '@dinghy/base-components'
import { z } from 'zod'
import { InputSchema as AwsInstanceInputSchema } from '../../services/ec2/AwsInstance.tsx'

const Ec2ServerSchema = AwsInstanceInputSchema.extend({
  name: ResolvableStringSchema.optional(),
  instance_type: z.string().default('t4g.nano'),
  associate_public_ip_address: z.boolean().default(true),
  root_block_device: z.object({
    volume_size: z.number().default(8),
  }).loose().default({
    volume_size: 8,
  }),
})

const Ec2ServersSchema = z.record(z.string(), Ec2ServerSchema.loose())

export type Ec2ServerType = z.output<typeof Ec2ServersSchema>

export function parseEc2Servers(
  servers?: any,
): Record<string, Ec2ServerType> {
  const renderOptions = getRenderOptions()
  let ec2Servers = servers || renderOptions.ec2Servers
  if (!ec2Servers) {
    ec2Servers = { default: { name: () => renderOptions.stack.name } }
  }
  Object.entries(ec2Servers).forEach(([name, server]) => {
    if (typeof server === 'object') {
      ;(server as any).name ??= name
    } else {
      ec2Servers[name] = { name }
    }
  })

  const normalisedServers = Ec2ServersSchema.parse(ec2Servers) as Record<
    string,
    Ec2ServerType
  >
  Object.values(normalisedServers).forEach((server) => {
    server._title ??= server.name
  })
  return normalisedServers
}
