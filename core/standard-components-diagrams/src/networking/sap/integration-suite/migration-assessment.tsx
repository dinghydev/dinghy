import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MIGRATION_ASSESSMENT = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Integration_Suite_-_Migration_Assessment',
  _width: 60,
  _height: 60,
}

export function MigrationAssessment(props: DiagramNodeProps) {
  return (
    <Shape
      {...MIGRATION_ASSESSMENT}
      {...props}
      _style={extendStyle(MIGRATION_ASSESSMENT, props)}
    />
  )
}
