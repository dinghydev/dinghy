import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATABASE_PUBLIC_FOLDER = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.database_public_folder;',
  _width: 53,
  _height: 54,
}

export function DatabasePublicFolder(props: DiagramNodeProps) {
  return <Shape {...DATABASE_PUBLIC_FOLDER} {...props} />
}
