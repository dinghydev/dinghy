import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IMPORT_TOOL = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/ImportTool.svg;strokeColor=none;',
  },
  _width: 60.12,
  _height: 68,
}

export function ImportTool(props: DiagramNodeProps) {
  return (
    <Shape
      {...IMPORT_TOOL}
      {...props}
      _style={extendStyle(IMPORT_TOOL, props)}
    />
  )
}
