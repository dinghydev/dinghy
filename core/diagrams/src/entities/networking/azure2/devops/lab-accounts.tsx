import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LAB_ACCOUNTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/devops/Lab_Accounts.svg;strokeColor=none;',
  },
  _original_width: 65.16,
  _original_height: 68,
}

export function LabAccounts(props: NodeProps) {
  return (
    <Shape
      {...LAB_ACCOUNTS}
      {...props}
      _style={extendStyle(LAB_ACCOUNTS, props)}
    />
  )
}
