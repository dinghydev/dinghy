import { Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GROUP_ACCOUNT_COLOR = '#CD2264'

export const GROUP_ACCOUNT = {
  _color: GROUP_ACCOUNT_COLOR,
  _icon: 'mxgraph.aws4.group_account',
}

export function GroupAccount(props: DiagramNodeProps) {
  return <Shape {...GROUP_ACCOUNT} {...props} />
}
