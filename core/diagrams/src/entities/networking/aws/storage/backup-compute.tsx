import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BACKUP_COMPUTE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.backup_compute;',
  },
  _original_width: 78,
  _original_height: 77,
}

export function BackupCompute(props: DiagramNodeProps) {
  return (
    <Shape
      {...BACKUP_COMPUTE}
      {...props}
      _style={extendStyle(BACKUP_COMPUTE, props)}
    />
  )
}
