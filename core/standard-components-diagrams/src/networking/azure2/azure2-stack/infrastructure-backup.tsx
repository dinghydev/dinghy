import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INFRASTRUCTURE_BACKUP = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_stack/Infrastructure_Backup.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 69,
}

export function InfrastructureBackup(props: DiagramNodeProps) {
  return (
    <Shape
      {...INFRASTRUCTURE_BACKUP}
      {...props}
      _style={extendStyle(INFRASTRUCTURE_BACKUP, props)}
    />
  )
}
