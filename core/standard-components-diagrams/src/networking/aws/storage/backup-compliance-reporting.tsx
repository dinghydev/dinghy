import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BACKUP_COMPLIANCE_REPORTING = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.backup_compliance_reporting;',
  _width: 64,
  _height: 78,
}

export function BackupComplianceReporting(props: DiagramNodeProps) {
  return (
    <Shape
      {...BACKUP_COMPLIANCE_REPORTING}
      {...props}
      _style={extendStyle(BACKUP_COMPLIANCE_REPORTING, props)}
    />
  )
}
