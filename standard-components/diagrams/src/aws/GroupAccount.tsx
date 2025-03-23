import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GROUP_ACCOUNT_COLOR = '#CD2264'

export const GROUP_ACCOUNT = {
  _color: GROUP_ACCOUNT_COLOR,
  _icon: 'mxgraph.aws4.group_account',
}

export default function GroupAccount(props: DiagramNodeProps) {
  return <Shape {...GROUP_ACCOUNT} {...props} />
}
