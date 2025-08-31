import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LAB_ACCOUNTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/devops/Lab_Accounts.svg;strokeColor=none;',
  _width: 65.16,
  _height: 68,
}

export function LabAccounts(props: DiagramNodeProps) {
  return (
    <Shape
      {...LAB_ACCOUNTS}
      {...props}
      _style={extendStyle(LAB_ACCOUNTS, props)}
    />
  )
}
