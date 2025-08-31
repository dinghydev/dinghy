import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATAZONE_DATA_PROJECTS = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.datazone_data_projects;',
  },
  _width: 60,
  _height: 60,
}

export function DatazoneDataProjects(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATAZONE_DATA_PROJECTS}
      {...props}
      _style={extendStyle(DATAZONE_DATA_PROJECTS, props)}
    />
  )
}
