import React, { useState } from 'react';
import { Button, Container, Grid, Tab, Tabs, Typography } from '@mui/material';
import menu from './data';
import './style.css'
export default function TabMenu() {
    const categories = ['All', ...Array.from(new Set(menu.map((item) => item.category)))];

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredItems, setFilteredItems] = useState(menu);

    const handleCategoryClick = (event, newCategory) => {
        setSelectedCategory(newCategory);
        const filtered = newCategory === 'All' ? menu : menu.filter((item) => item.category === newCategory);
        setFilteredItems(filtered);
    };

    return (
        <div className='body'>
            <Container className="menu-container">
                <h2 class="menu-header">List Menu</h2>
                <Tabs
                    value={selectedCategory}
                    onChange={handleCategoryClick}
                    aria-label="menu categories"
                    className="menu-tabs"
                >
                    {categories.map((category) => (
                        <Tab key={category} label={category} value={category} className="menu-tab" />
                    ))}
                </Tabs>
                <Grid container spacing={2} className="menu-items">
                    {filteredItems.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id} className="menu-item">
                            <img src={item.img} alt={item.title} style={{ width: '100%' }} />
                            <Typography variant="h5">{item.title}</Typography>
                            <Typography variant="body2" className="menu-item-desc">
                                {item.desc}
                            </Typography>
                            <Button variant="contained" color="primary" className="menu-item-button">
                                ${item.price} - Order
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}
