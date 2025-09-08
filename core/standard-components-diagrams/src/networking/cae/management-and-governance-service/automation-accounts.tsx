import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AUTOMATION_ACCOUNTS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Automation.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
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
