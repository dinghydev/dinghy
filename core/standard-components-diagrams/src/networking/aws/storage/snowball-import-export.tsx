import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SNOWBALL_IMPORT_EXPORT = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.import_export;',
  _width: 78,
  _height: 61,
}

export function SnowballImportExport(props: DiagramNodeProps) {
  return (
    <Shape
      {...SNOWBALL_IMPORT_EXPORT}
      {...props}
      _style={extendStyle(SNOWBALL_IMPORT_EXPORT, props)}
    />
  )
}
