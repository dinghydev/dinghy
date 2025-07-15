import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IMPORT_TOOL = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/ImportTool.svg;',
  _width: 60.12,
  _height: 68,
}

export function ImportTool(props: DiagramNodeProps) {
  return <Shape {...IMPORT_TOOL} {...props} />
}
