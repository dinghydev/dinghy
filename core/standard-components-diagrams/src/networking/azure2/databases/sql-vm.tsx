import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SQL_VM = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Azure_SQL_VM.svg;strokeColor=none;',
  _width: 64,
  _height: 60,
}

export function SqlVm(props: DiagramNodeProps) {
  return <Shape {...SQL_VM} {...props} _style={extendStyle(SQL_VM, props)} />
}
