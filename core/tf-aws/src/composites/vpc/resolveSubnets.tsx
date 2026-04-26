import { toId } from '@dinghy/base-components'
import { useAwsSubnets } from '../../services/vpc/AwsSubnet.tsx'
import { DataAwsSubnet } from '../../services/vpc/DataAwsSubnet.tsx'

const SUBNET_ID_RE = /^subnet-[0-9a-f]+$/i

// Turn a user-facing subnet list into Terraform-usable refs:
//   - `subnet-xxxxx` IDs pass through verbatim
//   - anything else is a Name tag → looked up via DataAwsSubnet and rewritten
//     to `${data.aws_subnet.awssubnet_<toId(name)>.id}`
//   - null / empty → falls back to the on-demand VPC's public or private
//     subnets (picked by `isPrivate`).
//
// Returns a lazy `subnetIds()` resolver plus a `<Subnets />` component that
// renders the DataAwsSubnet lookup nodes. Multiple callers sharing a subnet
// name dedupe via `_consolidatedId`.
export function resolveSubnets(
  subnets: string[] | null,
  isPrivate: boolean,
) {
  const configured = subnets ?? []
  const lookupNames = configured.filter((s) => !SUBNET_ID_RE.test(s))
  // Only fall back to on-demand VPC subnets when the user supplied nothing.
  // When subnets are explicit we skip the tree-walk entirely so callers that
  // bring their own VPC don't trip the "Tag AwsSubnet not found" error.
  const { awsSubnets } = configured.length
    ? { awsSubnets: [] as any[] }
    : useAwsSubnets(isPrivate ? 'private' : 'public')

  const resolved = configured.length
    ? configured.map((s) =>
      SUBNET_ID_RE.test(s) ? s : `\${data.aws_subnet.awssubnet_${toId(s)}.id}`
    )
    : undefined

  const subnetIds = () => resolved ?? awsSubnets.map((s: any) => s.id)

  const Subnets = () => (
    <>
      {lookupNames.map((name) => (
        <DataAwsSubnet
          key={name}
          _display='none'
          _title={name}
          _consolidatedId={`awssubnet_${toId(name)}`}
          tags={{ Name: name }}
        />
      ))}
    </>
  )

  return { subnetIds, Subnets }
}
