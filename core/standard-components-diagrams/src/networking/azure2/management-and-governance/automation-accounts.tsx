import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AUTOMATION_ACCOUNTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Automation_Accounts.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
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
