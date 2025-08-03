import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_BOX_IMPORT_EXPORT_STORAGE = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Data_Box.svg;strokeColor=none;',
  _width: 50,
  _height: 47,
}

export function DataBoxImportExportStorage(props: DiagramNodeProps) {
  return <Shape {...DATA_BOX_IMPORT_EXPORT_STORAGE} {...props} />
}
