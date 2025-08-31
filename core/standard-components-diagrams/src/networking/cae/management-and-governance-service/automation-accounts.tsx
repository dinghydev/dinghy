import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AUTOMATION_ACCOUNTS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Automation.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function AutomationAccounts(props: DiagramNodeProps) {
  return (
    <Shape
      {...AUTOMATION_ACCOUNTS}
      {...props}
      _style={extendStyle(AUTOMATION_ACCOUNTS, props)}
    />
  )
}
