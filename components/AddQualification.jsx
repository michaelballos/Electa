import { useState } from 'react'
import {
    Popover,
    Text,
    TextInput,
    Button,
    Image,
    MultiSelect,
} from '@mantine/core'
import styles from '../styles/addQual.module.css'
import MultiSelec from './MultiSelect'

const AddQualification = () => {
    const [opened, setOpened] = useState(false)

    return <MultiSelect / >
}

export default AddQualification